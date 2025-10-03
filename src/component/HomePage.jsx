import ParentButton from "./ParentButton";
import Post from "./Post";

const HomePage = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Post
          title="Post 1"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 2"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 3"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 4"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 5"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 6"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 7"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 8"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 9"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
        <Post
          title="Post 10"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptas?"
        />
      </div>
      <div style={{ width: "30%" }}>
        <ParentButton />
      </div>
    </div>
  );
};

export default HomePage;
