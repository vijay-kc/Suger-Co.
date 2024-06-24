import teamImgOne from "../../assets/teamImgOne.png";
import teamImgTwo from "../../assets/teamImgTwo.png";
import teamImgThree from "../../assets/teamImgThree.png";
import teamImgFour from "../../assets/teamImgFour.png";

const blogPosts = [
  {
    id: 1,
    image: teamImgOne,
    title: 'Boost your conversion rate',
    content: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla...',
    author: {
      name: 'James Andresson',
      title: 'Co-Founder / CTO',
    },
  },
  {
    id: 2,
    image: teamImgTwo,
    title: 'How to use search engine optimization to drive sales',
    content: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque...',
    author: {
      name: 'Angel Steven',
      title: 'Front-end Developer',
    },
  },
  {
    id: 3,
    image: teamImgThree,
    title: 'Improve your customer experience',
    content: 'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure...',
    author: {
      name: 'Joss Adresson',
      title: 'Director of Product',
    },
  },
  {
    id: 4,
    image: teamImgFour,
    title: 'How to use search engine optimization to drive sales',
    content: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque...',
    author: {
      name: 'Lity Brown',
      title: 'Front-end Developer',
    },
  },
  

  // Add more blog posts here
];
const Blog = () => {
  return (
    <div style={{maxWidth: "960px",
      margin: "0 auto",
      padding: "20px"}}>
      <h1 style={{fontSize:"32px",
        fontWeight: "bold",
        marginBottom:"10px"
      }}>From the blog</h1>
      <p style={{fontSize:"16px",
        color:"#666",
        marginBottom:"20px"
      }}>
        Learn how to grow your business with our expert advice.
      </p>
      <div style={{display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between"
      }}>
        {blogPosts.map((post) => (
          <div key={post.id} style={{width:"30%",
            marginBottom:"20px",
            padding:"15px",
            border:"1px solid #ccc",
            borderRadius:"5px"
          }}>
            <img style={{width:"100%",
              
              borderRadius:"5px 5px 0 0",
              objectFit:"cover"
            }} src={post.image} alt={post.title} />
            <h2 style={{fontSize:"20px",
              fontWeight: "bold",
              marginBottom:"10px"
            }}>{post.title}</h2>
            <p style={{fontSize:"15px",
              lineHeight:"1.5",
              color:"#333",
            }}>{post.content}</p>
            <div style={{marginTop:"15px"}}>
              <p style={{fontWeight:"bold"}}>{post.author.name}</p>
              <p style={{fontSize:"14px",
                color:"#777"
              }}>{post.author.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
