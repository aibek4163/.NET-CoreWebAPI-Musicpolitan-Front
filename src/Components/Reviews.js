import ReactSwipe from "react-swipe";
import { Row } from "react-materialize";

export const Reviews = () => {
  let reactSwipeEl;

  return (
    <div className="main_wrapper">
      <div className="row valign-wrapper">
        <h3 className="col s9" style={{ paddingLeft: "0px" }}>
          Reviews
        </h3>
        <div className="col s3 right-align">
          <button
            className="waves-effect waves-light btn"
            onClick={() => reactSwipeEl.prev()}
          >
            <span class="material-icons" style={{ lineHeight: "" }}>
              chevron_left
            </span>
          </button>
          <button
            style={{ marginLeft: "10px" }}
            className="waves-effect waves-light btn"
            onClick={() => reactSwipeEl.next()}
          >
            <span class="material-icons" style={{ lineHeight: "" }}>
              chevron_right
            </span>
          </button>
        </div>
      </div>

      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div>
          <Row>
            <div class="col s12 m6" style={{ paddingLeft: "0px" }}>
              <div class="card horizontal">
                <div class="card-image">
                  <img src="https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/b50dd315-garbage-garbage-1995-2361.jpg?w=685" />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12 m6" style={{ paddingLeft: "0px" }}>
              <div class="card horizontal">
                <div class="card-image">
                  <img src="https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/28fd2a0f-m1000x1000.jpg?w=685" />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
        <div>
          <Row>
            <div class="col s12 m6" style={{ paddingLeft: "0px" }}>
              <div class="card horizontal">
                <div class="card-image">
                  <img src="https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/d8b49f5e-dialect_-under-_-between.jpeg?w=685" />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12 m6" style={{ paddingLeft: "0px" }}>
              <div class="card horizontal">
                <div class="card-image">
                  <img src="https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/28fd2a0f-m1000x1000.jpg?w=685" />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
        <div>PANE 3</div>
      </ReactSwipe>
    </div>
  );
};
