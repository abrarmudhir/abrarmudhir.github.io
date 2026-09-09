"""Insert Interval.

Given a list of non-overlapping intervals sorted by their start values and a
new interval, insert the new interval while keeping the result sorted and
non-overlapping. Merge overlapping intervals as needed.

Each interval is represented as [start, end]. Two intervals overlap if they
share at least one point, including an endpoint.

Return the resulting list. The input does not need to be modified in place.

Examples:
    1. Input:
           intervals = [[1, 3], [6, 9]]
           newInterval = [2, 5]
       Output:
           [[1, 5], [6, 9]]

    2. Input:
           intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
           newInterval = [4, 8]
       Output:
           [[1, 2], [3, 10], [12, 16]]
       Explanation:
           [4, 8] overlaps with [3, 5], [6, 7], and [8, 10], merging
           them into [3, 10].

Constraints:
    - 0 <= len(intervals) <= 10**4
    - Each interval and newInterval contain exactly two endpoints.
    - 0 <= start <= end <= 10**5 for every interval, including newInterval.
    - intervals is sorted by start value and contains no overlaps.
"""

from typing import List


class Solution:
    @staticmethod
    def insert(intervals: List[List[int]], new_interval: List[int]) -> List[List[int]]:
        """Insert and merge in O(n) time, without modifying the inputs."""
        result = []
        start, end = new_interval
        i = 0

        # Keep intervals that end strictly before the new interval.
        while i < len(intervals) and intervals[i][1] < start:
            result.append(intervals[i][:])
            i += 1

        # Shared endpoints count as overlaps.
        while i < len(intervals) and intervals[i][0] <= end:
            start = min(start, intervals[i][0])
            end = max(end, intervals[i][1])
            i += 1
        result.append([start, end])

        # Remaining intervals start after the merged interval.
        while i < len(intervals):
            result.append(intervals[i][:])
            i += 1

        return result


def main() -> None:
    """Run the sample tests from the problem description."""
    test_cases = [
        ([[1, 3], [6, 9]], [2, 5], [[1, 5], [6, 9]]),
        (
            [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
            [4, 8],
            [[1, 2], [3, 10], [12, 16]],
        ),
    ]

    for number, (intervals, new_interval, expected) in enumerate(test_cases, start=1):
        actual = Solution.insert(intervals, new_interval)
        assert actual == expected, (
            f"Sample {number} failed: expected {expected}, got {actual}"
        )
        print(f"Sample {number} passed: {actual}")


if __name__ == "__main__":
    main()
