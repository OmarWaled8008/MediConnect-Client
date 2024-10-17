import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/circlescatterhaikei.svg";
export default function Blog() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      content:
        "As a physician, I often see patients searching for effective ways to manage their pain. While medications and therapies are often the focus, an increasingly important factor is emerging: the role of diet and gut health in pain management.",
      title: "How Your Diet Affects Your Pain",
      author: {
        name: "Dr. Anita Gupta",
        profession: "PharmD",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "October 8, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [
        "Omar: Informative!",
        "Marina: One of the best articles I have ever read.",
      ],
      newComment: "",
    },
    {
      id: 2,
      content:
        "“You’re going in through the exit, idiot.” These seven words from a stranger were enough to ruin the rest of the day for John. He’d just enjoyed a lovely week at the beach with his family and had stopped at a department store on the last morning of their vacation. John was in a great mood just before this incident, and then wound up fuming for the entire 6-hour car ride home, unable to let it go.",
      title: "Don't Let Other People Ruin Your Day",
      author: {
        name: "Dr. Seth J. Gillihan",
        profession: "Therapist",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      date: "July 14, 2021",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: ["Omar: Insightful!", "Ahmed: Great Article."],
      newComment: "",
    },
    {
      id: 3,
      content:
        "Myth: Cutting out gluten means cutting out carbs.\nFact: Not all carbohydrates contain gluten. Gluten is a protein found in wheat, barley, rye, and related grains like spelt and farro. Many other grain foods such as rice, oats, and quinoa are naturally gluten-free. Carbohydrate-rich foods like fruit, plain yogurt, and vegetables like potatoes and corn don’t naturally contain gluten either.",
      title: "Myths and Facts About Going Gluten-Free",
      author: {
        name: "Sally Kuzemchak",
        profession: "Doctor",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      date: "August 12, 2022",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 4,
      content:
        "Understanding mental health is crucial for overall well-being. It's not just the absence of illness; it's a state of well-being that allows individuals to cope with stress, work productively, and contribute to their community.",
      title: "The Importance of Mental Health",
      author: {
        name: "Dr. Emily Carter",
        profession: "Psychiatrist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "March 5, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 5,
      content:
        "Physical activity can help reduce the symptoms of anxiety and depression. Regular exercise increases the production of endorphins, which are chemicals in the brain that act as natural painkillers and mood elevators.",
      title: "How Exercise Can Improve Your Mood",
      author: {
        name: "Dr. Alex Johnson",
        profession: "Fitness Expert",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "April 1, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 6,
      content:
        "Nutrition plays a significant role in mental health. Certain nutrients, like omega-3 fatty acids, vitamins, and minerals, can positively influence your mood and mental state.",
      title: "Nutrition and Mental Wellness",
      author: {
        name: "Dr. Lisa Raymond",
        profession: "Nutritionist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "May 15, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 7,
      content:
        "Sleep is a vital component of overall health. Poor sleep can lead to various health issues, including obesity, heart disease, and depression. It's essential to prioritize sleep hygiene.",
      title: "The Impact of Sleep on Health",
      author: {
        name: "Dr. Mark Harrison",
        profession: "Sleep Specialist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "June 20, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 8,
      content:
        "Mindfulness and meditation can reduce stress, improve emotional health, and enhance self-awareness. These practices help individuals remain present and engaged in their lives.",
      title: "Benefits of Mindfulness and Meditation",
      author: {
        name: "Dr. Sarah Thompson",
        profession: "Mindfulness Coach",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "July 10, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 9,
      content:
        "Chronic stress can have serious implications for physical and mental health. Learning effective stress management techniques is essential for leading a balanced life.",
      title: "Managing Chronic Stress",
      author: {
        name: "Dr. Rebecca Collins",
        profession: "Clinical Psychologist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "August 22, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 10,
      content:
        "Healthy relationships contribute to emotional and mental well-being. Building strong connections with others can provide support and improve overall life satisfaction.",
      title: "The Role of Relationships in Mental Health",
      author: {
        name: "Dr. James Foster",
        profession: "Counselor",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "September 15, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 11,
      content:
        "The benefits of laughter are well-documented. Laughter can decrease stress hormones, boost mood, and strengthen the immune system.",
      title: "Laughter: The Best Medicine",
      author: {
        name: "Dr. Carol Grant",
        profession: "Health Psychologist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "October 1, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 12,
      content:
        "Art therapy is a therapeutic technique that uses creative expression to help individuals improve their mental, emotional, and physical well-being.",
      title: "Exploring Art Therapy",
      author: {
        name: "Dr. Jenny Lee",
        profession: "Art Therapist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "November 10, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 13,
      content:
        "Music can have a profound impact on emotions and mental health. Listening to your favorite songs can elevate your mood and bring comfort during tough times.",
      title: "The Healing Power of Music",
      author: {
        name: "Dr. Nick Turner",
        profession: "Music Therapist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "December 5, 2023",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 14,
      content:
        "Gratitude practices can enhance well-being and lead to greater happiness. Keeping a gratitude journal is an effective way to cultivate a positive mindset.",
      title: "The Benefits of Gratitude",
      author: {
        name: "Dr. Molly Anderson",
        profession: "Life Coach",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "January 20, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 15,
      content:
        "Nature has a calming effect on the mind. Spending time outdoors can help reduce stress, improve mood, and increase overall well-being.",
      title: "The Healing Power of Nature",
      author: {
        name: "Dr. Brian Matthews",
        profession: "Environmental Psychologist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "February 15, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 16,
      content:
        "Digital detox can help improve mental clarity and reduce anxiety. Taking breaks from screens allows for more mindfulness and connection to the real world.",
      title: "The Benefits of Digital Detox",
      author: {
        name: "Dr. Claire Johnson",
        profession: "Tech Specialist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "March 12, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 17,
      content:
        "The importance of self-care cannot be overstated. Taking time for yourself can rejuvenate your spirit and enhance your ability to cope with stress.",
      title: "Self-Care: A Necessity, Not a Luxury",
      author: {
        name: "Dr. Natalie Rivers",
        profession: "Wellness Coach",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "April 25, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 18,
      content:
        "Coping strategies are essential for managing stress and challenges in life. Effective coping techniques can lead to better mental health outcomes.",
      title: "Developing Healthy Coping Strategies",
      author: {
        name: "Dr. Victoria Ellis",
        profession: "Clinical Psychologist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "May 30, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 19,
      content:
        "Understanding and accepting your emotions can lead to healthier relationships and improved emotional well-being. Emotional intelligence is key.",
      title: "The Importance of Emotional Intelligence",
      author: {
        name: "Dr. Simon Walsh",
        profession: "Psychotherapist",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "June 18, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
    {
      id: 20,
      content:
        "Effective communication skills are crucial for personal and professional success. Being able to convey your thoughts clearly can enhance relationships and reduce conflicts.",
      title: "The Power of Communication",
      author: {
        name: "Dr. Angela Green",
        profession: "Communication Expert",
        imageUrl: "https://via.placeholder.com/300x300",
      },
      date: "July 4, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
  ]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState("");
  const [newPostFile, setNewPostFile] = useState(null);

  const handleAddPost = () => {
    if (newPostContent) {
      const newPost = {
        id: Date.now(),
        content: newPostContent,
        title: "New Blog Post", // Default title for new posts
        imageUrl: newPostFile ? URL.createObjectURL(newPostFile) : newPostImage,
        author: {
          name: "Marina",
          profession: "User",
          imageUrl: "https://via.placeholder.com/50",
        },
        date: new Date().toLocaleDateString(),
        reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
        comments: [],
        newComment: "",
      };
      setPosts([...posts, newPost]);
      setNewPostContent("");
      setNewPostImage("");
      setNewPostFile(null);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewPostFile(file);
      setNewPostImage("");
    }
  };

  const handleAddComment = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId && post.newComment) {
        return {
          ...post,
          comments: [...post.comments, `Marina: ${post.newComment}`],
          newComment: "",
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleCommentChange = (postId, value) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          newComment: value,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleReaction = (postId, reactionType) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              [reactionType]: post.reactions[reactionType] + 1,
            },
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 relative">
      <div className="absolute top-0 left-0 w-full h-auto justify-center">
        <img
          src={pic}
          alt="Background Design"
          className="w-full object-cover h-64"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-da mt-2">
          <h1 className="text-5xl font-bold">Our Health Blog</h1>
          <p className="text-lg mt-1">
            {" "}
            Stay informed with the latest health tips and articles by experts.
          </p>
        </div>
      </div>
      <div className="relative">
        {/* Hero Section */}
        <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md z-10 relative mt-40 move-right  ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Create a New Post
          </h3>
          <textarea
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pr"
            rows="3"
            placeholder="What's on your mind?"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <input
            type="url"
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pr"
            placeholder="Image URL (optional)"
            value={newPostImage}
            onChange={(e) => {
              setNewPostImage(e.target.value);
              setNewPostFile(null);
            }}
          />
          <input
            type="file"
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pr"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className="w-full bg-pr text-white py-2 rounded-md hover:bg-da transition-all"
            onClick={handleAddPost}
          >
            Post
          </button>
        </div>

        <div className="container mx-auto py-10 px-4">
          {/* Create a New Post Section */}

          {/* Display Posts */}
          <div className="posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="blog-post mb-6 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt="Post"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                )}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 hover:text-blue-500 cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="reactions mb-4 flex space-x-2">
                  <button
                    className="bg-gray-100 p-2 rounded-lg hover:bg-c3 transition"
                    onClick={() => handleReaction(post.id, "like")}
                  >
                    👍 {post.reactions.like}
                  </button>
                  <button
                    className="bg-gray-100 p-2 rounded-lg hover:bg-red-300 transition"
                    onClick={() => handleReaction(post.id, "love")}
                  >
                    ❤️ {post.reactions.love}
                  </button>
                  <button
                    className="bg-gray-100 p-2 rounded-lg hover:bg-yellow-300 transition"
                    onClick={() => handleReaction(post.id, "haha")}
                  >
                    😂 {post.reactions.haha}
                  </button>
                  <button
                    className="bg-gray-100 p-2 rounded-lg hover:bg-gray-400 transition"
                    onClick={() => handleReaction(post.id, "sad")}
                  >
                    😢 {post.reactions.sad}
                  </button>
                  <button
                    className="bg-gray-100 p-2 rounded-lg hover:bg-red-500 transition"
                    onClick={() => handleReaction(post.id, "angry")}
                  >
                    😡 {post.reactions.angry}
                  </button>
                </div>
                <div className="comment-section">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pr"
                    value={post.newComment}
                    onChange={(e) =>
                      handleCommentChange(post.id, e.target.value)
                    }
                  />
                  <button
                    className="mt-2 bg-pr text-white py-2 px-4 rounded-md hover:bg-da transition-all"
                    onClick={() => handleAddComment(post.id)}
                  >
                    Comment
                  </button>
                </div>
                <div className="comments mt-4">
                  {post.comments.map((comment, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                      {comment}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
