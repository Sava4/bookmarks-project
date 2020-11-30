function Card({ link_id, name, url }) {
  return (
    <>
      <div class="card">
        <div class="card-header clearfix">
          <button class="btn btn-primary btn-action float-right">
            <i class="icon icon-edit " />
          </button>
          <a href={"http://" + url}>
            <div class="card-title h6">{name}</div>
            <div class="card-subtitle text-primary">{url}</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
