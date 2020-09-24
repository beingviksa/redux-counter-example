import React from "react";
import { connect } from "react-redux";
import { increase, decrease, reset, modalOpen } from "./actions";

function Counter(props) {
  const { count, increase, decrease, reset, modalOpen } = props;
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button type="btn" className="btn" onClick={decrease}>
          decrease
        </button>
        <button
          type="btn"
          className="btn"
          onClick={() => {
            reset();
            modalOpen(
              "vikram",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam illum animi rem dolore iste veritatis ipsa! Qui, placeat culpa!"
            );
          }}
        >
          reset
        </button>
        <button type="btn" className="btn" onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.countState.count };
}

const mapDispatchToProps = {
  increase,
  decrease,
  reset,
  modalOpen,
};

// function mapDispatchToProps(dispatch, ownProps) {
//   console.log(ownProps);

//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => {
//       dispatch(reset());

//       dispatch(
//         modalOpen(
//           "viksa",
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam illum animi rem dolore iste veritatis ipsa! Qui, placeat culpa!"
//         )
//       );
//     },
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
