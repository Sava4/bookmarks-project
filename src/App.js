import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Block from "./Block";

// eslint-disable-next-line
const json = [
  {
    block_id: 2,
    name: "Middle Block",
    links: [],
    menus: [
      {
        menu_id: 1,
        name: "Shops",
        menu_links: [
          {
            menu_link_id: 2,
            name: "Amazon",
            url: "www.amazon.com"
          },
          {
            menu_link_id: 3,
            name: "eBay",
            url: "ebay.com"
          }
        ]
      }
    ]
  },
  {
    block_id: 3,
    name: "Bottom Block",
    links: [],
    menus: [
      {
        menu_id: 2,
        name: "Films",
        menu_links: [
          {
            menu_link_id: 4,
            name: "Netflix",
            url: "netflix.com"
          },
          {
            menu_link_id: 5,
            name: "Megogo",
            url: "megogo.com"
          }
        ]
      }
    ]
  },
  {
    block_id: 4,
    name: "Footer in Empty Basement",
    links: [],
    menus: []
  },
  {
    block_id: 1,
    name: "Shopping",
    links: [
      {
        link_id: 1,
        name: "Apple\n",
        url: "apple.com"
      },
      {
        link_id: 2,
        name: "Lenovo",
        url: "lenovo.com"
      },
      {
        link_id: 3,
        name: "Razer",
        url: "razer.com"
      },
      {
        link_id: 4,
        name: "Amazon Shop",
        url: "https://www.amazon.com"
      },
      {
        link_id: 5,
        name: "Зона 51",
        url: "https://www.3ona51.com/"
      },
      {
        link_id: 6,
        name: "Kasta",
        url: "kasta.ua"
      },
      {
        link_id: 7,
        name: "Bigl",
        url: "bigl.ua"
      }
    ],
    menus: [
      {
        menu_id: 3,
        name: "Auction Shops",
        menu_links: [
          {
            menu_link_id: 6,
            name: "Ebay Auction",
            url: "https://www.ebay.com"
          },
          {
            menu_link_id: 7,
            name: "OLX",
            url: "https://olx.ua"
          },
          {
            menu_link_id: 8,
            name: "Prom",
            url: "prom.ua"
          },
          {
            menu_link_id: 9,
            name: "Rozetka",
            url: "rozetka.com.ua"
          }
        ]
      }
    ]
  }
];

function App() {
  const [modalOpen, modalToggle] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const toggleModal = () => modalToggle(!modalOpen);

  return (
    <>
      <Header />

      <button class="btn btn-primary" onClick={toggleModal}>
        Toggle Modal
      </button>

      <section class="main-content container grid-xl">
        {json
          .sort((a, b) => a.block_id - b.block_id)
          .map(blockProp => (
            <Block {...blockProp} key={blockProp.block_id} />
          ))}
      </section>

      <section class={modalOpen ? "modal active" : "modal"}>
        <div class="modal-container">
          <div class="modal-header">
            <button
              class="btn btn-clear btn-action btn-lg float-right"
              onClick={toggleModal}
            >
              <i class="icon icon-close"></i>
            </button>
            <div class="modal-title h5">Modal title</div>
          </div>
          <div class="modal-body">
            <div class="content">
              <form>
                <div class="form-group">
                  <label class="form-label" htmlFor="input-name">
                    Name
                  </label>
                  <input
                    class="form-input"
                    id="input-name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label" htmlFor="input-url">
                    URL
                  </label>
                  <input
                    class="form-input"
                    id="input-url"
                    type="text"
                    placeholder="http://example.com"
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success mr-2">
              Save <i class="icon icon-check"></i>
            </button>
            <button class="btn btn-error ml-2">
              Delete <i class="icon icon-delete"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
