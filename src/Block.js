import React from "react";
import Card from "./Card";
import MenuCard from "./MenuCard";

function Block({ block_id, name, links, menus }) {
  //   const { block_id, name, links, menus } = props;
  //   console.log("All props: ", props);
  //   console.log("This is links", links);

  return (
    <>
      <div class="block bg-gray py-2 mb-2">
        <div class="block-header mb-2 px-2">
          <h4>{name}</h4>
          <button class="btn btn-primary btn-action btn-lg">
            <i class="icon icon-edit"></i>
          </button>
        </div>
        <div class="block-columns px-2">
          {links.map(linkProp => (
            <Card {...linkProp} key={linkProp.link_id} />
          ))}

          {menus.map(menuProp => (
            <React.Fragment key={"menu" + menuProp.menu_id}>
              {" "}
              <MenuCard {...menuProp} />{" "}
            </React.Fragment>
          ))}
        </div>
        <div class="block-footer my-2 py-2">
          <button class="btn btn-primary btn-action s-circle btn-lg">
            <i class="icon icon-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Block;
