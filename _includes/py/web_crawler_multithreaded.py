# The problem requires HTTP URLs; these examples do not make network requests.
# noinspection HttpUrlsUsage
"""Web Crawler Multithreaded.

Starting from startUrl, discover every reachable URL with the same hostname.
Use multiple threads to fetch links concurrently, and return the discovered
URLs in any order. Include startUrl itself and never crawl a URL twice.

Understanding the task:
    Think of webpages as a directed graph: each page is a vertex, and each link
    points from one page to another. Follow outgoing links from the starting
    page, but only continue along links whose hostname matches the starting
    hostname. A page on the same host is not included unless it is reachable
    through these allowed links.

    Different paths can identify different pages on the same host:
        http://leetcode.com/problems
        http://leetcode.com/contest

    Compare the entire hostname, not a substring or just its domain suffix.
    For example, news.yahoo.com and sports.yahoo.com are different hostnames.
    All URLs in this problem use HTTP and have no explicit port.

Provided API:
    htmlParser.getUrls(url) -> list[str]

    Returns the outgoing links on the given page. This is a blocking call that
    simulates an HTTP request and finishes within 15 milliseconds. The parser
    is supplied by the test environment; do not implement it or assume how it
    works internally.

Why multiple threads matter:
    A sequential crawler waits for each request before starting the next one.
    Threads allow requests for different discovered pages to overlap while
    waiting for responses. The problem requires this concurrency because a
    single-threaded solution exceeds its time limit.

    Coordinate shared state carefully:
    - Claim each URL once before scheduling it. Two pages may link to the same
      URL, and two workers must not both schedule it.
    - Make checking and recording a newly discovered URL one protected action,
      or let a single coordinator own the discovered-URL collection.
    - Avoid holding a shared-state lock during a blocking parser call; that
      would prevent other workers from making progress through the same lock.
    - Finish only when there are no queued pages and no requests still running.
      An empty queue alone is insufficient: a worker may discover more links.

How the examples are represented:
    urls lists the pages, and an edge [source, destination] means the page at
    urls[source] links to urls[destination]. Links are directional.
    These arrays describe test data only. Your method receives startUrl and
    htmlParser, and discovers links exclusively through htmlParser.getUrls().

Example 1:
    Input:
        urls = [
            "http://news.yahoo.com",
            "http://news.yahoo.com/news",
            "http://news.yahoo.com/news/topics/",
            "http://news.google.com",
            "http://news.yahoo.com/us",
        ]
        edges = [[2, 0], [2, 1], [3, 2], [3, 1], [0, 4]]
        startUrl = "http://news.yahoo.com/news/topics/"

    Output (any order):
        [
            "http://news.yahoo.com",
            "http://news.yahoo.com/news",
            "http://news.yahoo.com/news/topics/",
            "http://news.yahoo.com/us",
        ]

    Walkthrough:
        Start at page 2, which links to pages 0 and 1. Both share the hostname
        news.yahoo.com. Page 0 then reveals page 4, also on that hostname.
        The result contains pages 2, 0, 1, and 4. Page 3 links into this group,
        but an incoming link does not make page 3 reachable from page 2.

Example 2:
    Input:
        urls = [
            "http://news.yahoo.com",
            "http://news.yahoo.com/news",
            "http://news.yahoo.com/news/topics/",
            "http://news.google.com",
        ]
        edges = [[0, 2], [2, 1], [3, 2], [3, 1], [3, 0]]
        startUrl = "http://news.google.com"

    Output:
        ["http://news.google.com"]

    Explanation:
        Every outgoing link from the starting page has a different hostname.
        Ignore those links, so only the starting URL is returned.

Edge cases:
    - No outgoing links: return only startUrl.
    - Cycles or repeated links: the discovered-URL collection prevents repeats.
    - Several workers find the same URL: schedule it only once.
    - Links to other hosts: neither crawl nor include them in the result.

Constraints:
    - 1 <= len(urls) <= 1000; each URL contains 1 to 300 characters.
    - startUrl is in urls, and the URL library contains no duplicate URLs.
    - Hostnames use lowercase ASCII letters, digits, hyphens, and separating
      dots. Labels contain 1 to 63 characters and do not start or end in '-'.

Follow-up questions:
    Suppose 10,000 machines must crawl one billion URLs, and every machine runs
    the same software and knows about all the other machines.
    - How would you divide the work evenly while minimizing communication?
    - How would you recover if a machine failed or stopped responding?
    - How would you determine that the entire distributed crawl is finished?
"""

from typing import List, Protocol


class HtmlParser(Protocol):
    """Interface for the parser supplied by the test environment."""

    # Preserve the method name required by the supplied parser API.
    # noinspection PyPep8Naming
    def getUrls(self, url: str) -> List[str]:
        """Return the outgoing URLs from the given page."""
        ...


class Solution:
    # Preserve the parameter names required by the problem's signature.
    # noinspection PyPep8Naming
    def crawl(self, startUrl: str, htmlParser: HtmlParser) -> List[str]:
        pass
