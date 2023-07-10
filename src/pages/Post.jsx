import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
function Post() {
  return (
    <div className="flex justify-center">

    <div className="flex w-[1024px]  gap-10  ">
      <div className="flex-[2]">
        <img
          src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full h-[300px]  "
        />
        <div className="user flex  gap-3 my-5">
          <img
            src=" https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-12 h-12 object-cover rounded-[50%]"
          />
          <div className="info self-center">
            <p className="font-bold text-[14px] leading-3">Name</p>
            <p className="text-[13px]">posted 2 days ago</p>
          </div>
          <div className="flex self-center">
            <Link to={`/write?edit=2`}>

            <Edit style={{
              color:'lightblue'
            }}  />
            </Link>
            <div>

            <Delete style={{
              color:'lightblue'
            }} />
            </div>
          </div>
        </div>
        <h1 className="text-[32px] font-bold ">Lorem ipsum dolor sit amet.</h1>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti deleniti quae id adipisci nulla impedit. Suscipit incidunt a, amet eius modi aperiam pariatur, exercitationem vel est animi nihil. Rem ipsa earum blanditiis ipsam ullam? Odit quibusdam nostrum, molestias dolore perferendis vel consequatur fugit nam rerum voluptas quaerat hic voluptate harum eum modi deleniti id impedit? Accusamus eveniet ut neque itaque amet eius quasi facilis corrupti cumque, placeat porro magnam, nihil voluptatum velit molestiae sint expedita vitae mollitia, totam incidunt. Cupiditate repellat, voluptate magni aspernatur soluta repudiandae voluptas dignissimos et beatae magnam error? Dolores adipisci aliquam autem repudiandae sed dignissimos animi quos, iure, soluta temporibus aliquid tempora ipsa beatae ipsam similique voluptates a excepturi commodi inventore hic, voluptas expedita. Quasi impedit quam voluptatem veritatis eius eveniet nisi. Aliquid nostrum nam fuga rerum a vitae nemo similique corporis laboriosam. Unde alias ex asperiores facilis dolores natus odio ad et omnis necessitatibus consectetur ipsam, quidem error corrupti minus fuga quia provident iure temporibus inventore sit quas deleniti vel? Rem quisquam debitis mollitia aut cupiditate? Nulla distinctio perspiciatis tempora iusto ipsum quo, animi esse cupiditate consequuntur! Temporibus quis unde, delectus eaque explicabo, accusamus amet eum expedita obcaecati veritatis omnis, vel exercitationem illum sit.</p>
      </div>
      <div className="flex-[1] ">
        <Menu/>
      </div>
    </div>
    </div>

  );
}

export default Post;
