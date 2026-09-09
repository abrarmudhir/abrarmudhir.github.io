"""Insert Interval.

Given a list of non-overlapping intervals sorted by their start values and a
new interval, insert the new interval while keeping the result sorted and
non-overlapping. Merge overlapping intervals as needed.

Each interval is represented as [start, end]. Two intervals overlap if they
share at least one point, including an endpoint.

Return the resulting list. The input does not need to be modified in place.

Understanding the task:
    Think of each interval as a covered segment on a number line. Inserting a
    new segment may connect several existing segments into one larger segment.
    The result must cover exactly the same points as all the original segments
    plus the new one, without leaving overlapping segments in the list.

    For example, [1, 3] and [3, 5] share the point 3, so they merge into [1, 5].
    However, [1, 3] and [4, 5] do not overlap and must remain separate.

Examples:
    1. Input:
           intervals = [[1, 3], [6, 9]]
           new_interval = [2, 5]
       Output:
           [[1, 5], [6, 9]]

    2. Input:
           intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
           new_interval = [4, 8]
       Output:
           [[1, 2], [3, 10], [12, 16]]
       Explanation:
           [4, 8] overlaps with [3, 5], [6, 7], and [8, 10], merging
           them into [3, 10].

Approach: scan from left to right, handling three cases.
    1. Before: copy intervals whose end is less than the new interval's start.
       They cannot overlap the new interval.
    2. Overlapping: merge each interval whose start is at most the current end.
       Keep the smallest start and largest end seen so far. Compare against
       this updated end, because extending the interval can reveal more overlaps.
       Append the merged interval once this phase finishes.
    3. After: insert the merged interval before the first interval beyond its
       end, then copy that interval and all remaining intervals. If there is no
       interval after it, append the merged interval at the end of the scan.

Walkthrough of example 2:
    Begin with the interval to insert: [4, 8].
    - [1, 2] ends before 4, so copy it to the result.
    - Merge [3, 5]: the interval being built becomes [3, 8].
    - Merge [6, 7]: it is already covered, so keep [3, 8].
    - Merge [8, 10]: the shared endpoint 8 extends it to [3, 10].
    - [12, 16] starts after 10, so merging stops.
    Append [3, 10], then copy [12, 16].

Why one scan is enough:
    The input is already sorted and non-overlapping, so all intervals before
    the new interval come first, followed by its overlaps, then those after it.
    Once an interval starts beyond the merged end, no later interval can overlap
    it. There is no need to sort the input or revisit earlier intervals.

Edge cases:
    - Empty input: return a list containing the new interval.
    - No overlap: insert the new interval in its sorted position.
    - Containment: merging a smaller interval into a larger one keeps the larger.
    - Shared endpoints: merge them; the overlap comparison includes equality.

Complexity:
    O(n) time: each of the n existing intervals is visited once.
    O(n) output space and O(1) auxiliary space, excluding the returned list.
    This implementation copies interval lists so the result does not share
    mutable interval lists with either input.

Constraints:
    - 0 <= len(intervals) <= 10**4
    - Each interval and new_interval contain exactly two endpoints.
    - 0 <= start <= end <= 10**5 for every interval, including new_interval.
    - intervals is sorted by start value and contains no overlaps.
"""


class Solution:
    @staticmethod
    def insert(intervals: list[list[int]], new_interval: list[int]) -> list[list[int]]:
        """Return sorted, non-overlapping intervals after inserting new_interval.

        Args:
            intervals: Non-overlapping [start, end] pairs sorted by start.
            new_interval: The [start, end] pair to insert and merge as needed.

        Returns:
            A new list of interval lists covering all input points. Neither
            input is modified, and shared endpoints count as overlaps.
        """
        merged_intervals = []
        merged_start, merged_end = new_interval
        new_interval_inserted = False

        for interval_start, interval_end in intervals:
            if new_interval_inserted or interval_end < merged_start:
                # This interval is separate from the interval being merged.
                merged_intervals.append([interval_start, interval_end])
            elif interval_start > merged_end:
                # Place the merged interval before the first interval after it.
                merged_intervals.append([merged_start, merged_end])
                merged_intervals.append([interval_start, interval_end])
                new_interval_inserted = True
            else:
                # Overlapping intervals include those with shared endpoints.
                merged_start = min(merged_start, interval_start)
                merged_end = max(merged_end, interval_end)

        if not new_interval_inserted:
            merged_intervals.append([merged_start, merged_end])

        return merged_intervals


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
        assert (
            actual == expected
        ), f"Sample {number} failed: expected {expected}, got {actual}"
        print(f"Sample {number} passed: {actual}")


if __name__ == "__main__":
    main()
