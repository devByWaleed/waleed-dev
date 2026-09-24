const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";

const QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      badges {
        id
        displayName
        icon
      }
    }
  }
`;

export interface LeetCodeBadge {
    id: string;
    displayName: string;
    icon: string;
}

export interface LeetCodeStats {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    badges: LeetCodeBadge[];
}

export async function getLeetCodeStats(
    username: string
): Promise<LeetCodeStats | null> {
    try {
        const res = await fetch(LEETCODE_GRAPHQL_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Referer: "https://leetcode.com",
            },
            body: JSON.stringify({ query: QUERY, variables: { username } }),
            next: { revalidate: 3600 },
        });

        if (!res.ok) return null;

        const json = await res.json();
        const user = json?.data?.matchedUser;
        if (!user) return null;

        const counts = user.submitStats.acSubmissionNum as {
            difficulty: string;
            count: number;
        }[];
        const find = (difficulty: string) =>
            counts.find((c) => c.difficulty === difficulty)?.count ?? 0;

        return {
            totalSolved: find("All"),
            easySolved: find("Easy"),
            mediumSolved: find("Medium"),
            hardSolved: find("Hard"),
            badges: user.badges.map((badge: { id: string; displayName: string; icon: string }) => ({
                id: badge.id,
                displayName: badge.displayName,
                icon: badge.icon.startsWith("http")
                    ? badge.icon
                    : `https://leetcode.com${badge.icon}`,
            })),
        };
    } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
        return null;
    }
}