import React, { useState, useEffect } from "react";
import styles from "./LatestNewsSection.module.css"; // Will create this CSS module

const LatestNewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3); // Initially show 3 items
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Assume there's more initially

  useEffect(() => {
    // Fetch the initial set of news items on component mount
    fetchNews();
  }, []); // Empty dependency array means this runs only once on mount

  const fetchNews = async () => {
    setLoading(true);
    try {
      // Simulate network delay for AJAX feel
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await fetch("/data/news.json"); // Fetch from the public directory
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNewsItems(data);
      // Check if there are more items than currently visible + the next batch size (e.g., 3)
      if (visibleItems >= data.length) {
        setHasMore(false); // No more items to load initially if all fit
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      // Display an error message to the user
    } finally {
      setLoading(false);
    }
  };

  const loadMoreNews = () => {
    const nextVisibleItems = visibleItems + 3; // Load 3 more items
    setVisibleItems(nextVisibleItems);
    if (nextVisibleItems >= newsItems.length) {
      setHasMore(false); // Hide the "Load More" button if all items are shown
    }
  };

  return (
    <section className={styles.latestNews}>
      <h2>Latest News</h2>
      {loading && newsItems.length === 0 && <p>Loading news...</p>}{" "}
      {/* Show loading only initially */}
      {!loading && newsItems.length === 0 && (
        <p>No news available at the moment.</p>
      )}{" "}
      {/* Handle empty state */}
      <div className={styles.newsList}>
        {newsItems.slice(0, visibleItems).map(
          (
            item, // Display only visible items
          ) => (
            <div key={item.id} className={styles.newsItem}>
              <h3>{item.title}</h3>
              <p className={styles.date}>
                {new Date(item.date).toLocaleDateString()}
              </p>
              <p>{item.excerpt}</p>
              {/* Optional: Add a "Read More" link */}
              {/* <a href="#">Read More</a> */}
            </div>
          ),
        )}
      </div>
      {hasMore && ( // Conditionally render the button
        <button onClick={loadMoreNews} disabled={loading}>
          {loading ? "Loading..." : "Load More News"}
        </button>
      )}
    </section>
  );
};

export default LatestNewsSection;
