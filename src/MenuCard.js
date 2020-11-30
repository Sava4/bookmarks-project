import React, { useState } from "react";

function MenuCard({ menu_id, name, menu_links }) {
  const [menuToggle, setToggle] = useState(false);
  return (
    <>
      <div class="card bg-secondary">
        <div class="card-header clearfix">
          <button class="btn btn-primary btn-action float-right">
            <i class="icon icon-edit" />
          </button>
          <div
            class="card-title h6 p-centered c-hand"
            onClick={() => setToggle(!menuToggle)}
          >
            <strong>{name}</strong>{" "}
            <i
              class={
                !menuToggle
                  ? "icon icon-arrow-right ml-1"
                  : "icon icon-arrow-down ml-1"
              }
            ></i>
          </div>
        </div>
      </div>

      {menuToggle &&
        menu_links.map(menuLink => {
          return (
            <React.Fragment key={"menuLink" + menuLink.menu_link_id}>
              <div class="card bg-secondary">
                <div class="card-header clearfix">
                  <button class="btn btn-primary btn-action float-right">
                    <i class="icon icon-edit" />
                  </button>
                  <a href={"http://" + menuLink.url}>
                    <div class="card-title h6">{menuLink.name}</div>
                    <div class="card-subtitle text-primary">{menuLink.url}</div>
                  </a>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
}

export default MenuCard;
