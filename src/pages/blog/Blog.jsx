// src/pages/Blog.js

import React from "react";
import "./blog.css"; // Import your custom CSS file

export default function Blog() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog</h1>
      <p className="text-center mb-5 text-muted">
        Welcome to the WellNessWay Blog!
      </p>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="blog-post mb-5">
            <h2 className="post-title">
              How Telemedicine is Revolutionizing Healthcare
            </h2>
            <p className="text-muted">
              <strong>Published:</strong> August 31, 2024
            </p>
            <p className="text-muted">
              <strong>Author:</strong> Dr. Sarah Adams
            </p>
            <p>
              In recent years, telemedicine has transformed the way we access
              healthcare. Discover how virtual consultations, online
              prescriptions, and remote patient monitoring are making healthcare
              more accessible and efficient. Learn about the technology behind
              telemedicine and its impact on both patients and healthcare
              providers.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

          <div className="blog-post mb-5">
            <h2 className="post-title">
              Finding the Right Hospital: A Comprehensive Guide
            </h2>
            <p className="text-muted">
              <strong>Published:</strong> August 24, 2024
            </p>
            <p className="text-muted">
              <strong>Author:</strong> John Doe
            </p>
            <p>
              Choosing the right hospital can be overwhelming. This guide
              provides tips on how to find hospitals that meet your needs,
              whether you’re looking for specific specialties, high ratings, or
              insurance compatibility. Use our hospital locator tool to simplify
              your search and make informed decisions about your healthcare.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

          <div className="blog-post mb-5">
            <h2 className="post-title">
              The Benefits of Booking Appointments Online
            </h2>
            <p className="text-muted">
              <strong>Published:</strong> August 15, 2024
            </p>
            <p className="text-muted">
              <strong>Author:</strong> Jane Smith
            </p>
            <p>
              Online appointment booking offers convenience and efficiency.
              Explore the advantages of scheduling your healthcare appointments
              online, including real-time availability, instant confirmations,
              and the ability to manage all your bookings in one place. Find out
              how our platform can streamline your healthcare experience.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

          <div className="blog-post mb-5">
            <h2 className="post-title">
              Understanding Patient Reviews: What to Look For
            </h2>
            <p className="text-muted">
              <strong>Published:</strong> August 8, 2024
            </p>
            <p className="text-muted">
              <strong>Author:</strong> Dr. Emily Nguyen
            </p>
            <p>
              Patient reviews can provide valuable insights into the quality of
              care provided by healthcare professionals. Learn how to interpret
              reviews, what factors to consider, and how to use this information
              to choose the best healthcare providers for your needs.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

          <div className="blog-post mb-5">
            <h2 className="post-title">
              Mental Wellness: Tips for Managing Stress and Anxiety
            </h2>
            <p className="text-muted">
              <strong>Published:</strong> August 1, 2024
            </p>
            <p className="text-muted">
              <strong>Author:</strong> Dr. Michael Brown
            </p>
            <p>
              Mental wellness is an essential component of overall health.
              Discover practical tips for managing stress and anxiety, including
              mindfulness techniques, exercise routines, and professional
              support options. Prioritize your mental well-being with strategies
              that work for you.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
          <div className="blog-post mb-5">
            <h2 className="post-title">
              The Importance of Preventive Health Screenings
            </h2>
            <p className="text-muted">
              <strong>Published:</strong> September 4, 2024
            </p>
            <p className="text-muted">
              <strong>Author:</strong> Dr. Alex Rivera
            </p>
            <p>
              Preventive health screenings can catch diseases early when they
              are most treatable. Learn about the types of screenings you should
              consider, depending on your age and risk factors. Early detection
              saves lives, so make sure to prioritize your health by scheduling
              regular screenings.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

          <div className="blog-post mb-5">
            <h2 className="post-title">
              Nutrition and Wellness: A Holistic Approach to Health
            </h2>
            <p className="text-muted">
              <strong>Published:</strong> September 2, 2024
            </p>
            <p className="text-muted">
              <strong>Author:</strong> Dr. Linda Thompson
            </p>
            <p>
              Your diet has a significant impact on your overall well-being.
              Discover how balanced nutrition supports physical and mental
              health, and explore tips for incorporating healthy eating habits
              into your lifestyle. Learn about key nutrients that promote
              wellness and reduce the risk of chronic diseases.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

          <div className="blog-post mb-5">
            <h2 className="post-title">
              The Role of Exercise in Mental Health
            </h2>
            <p className="text-muted">
              <strong>Published:</strong> August 28, 2024
            </p>
            <p className="text-muted">
              <strong>Author:</strong> Dr. James Collins
            </p>
            <p>
              Exercise isn't just beneficial for physical health – it's also
              crucial for mental well-being. Learn how regular physical activity
              can reduce symptoms of anxiety and depression, improve mood, and
              enhance cognitive function. Find out how to create an exercise
              routine that works for you.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <h3>Subscribe to Our Newsletter</h3>
        <p>
          Stay updated with our latest blog posts, news, and health tips.
          Subscribe to our newsletter and never miss an update!
        </p>
        <a href="#" className="btn btn-secondary">
          Subscribe Now
        </a>
      </div>

      <div className="mb-5">
        <h3>Categories</h3>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-decoration-none">
              Healthcare Tips
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              Mental Wellness
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              Telemedicine
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              Hospital Locator
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              Patient Reviews
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <h3>Archive</h3>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-decoration-none">
              August 2024
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              July 2024
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              June 2024
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
