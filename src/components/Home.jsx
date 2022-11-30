import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { deleUser, accountState } from "../reducers/AccountsReducer";
import { minesOne, addOne, counterState } from "../reducers/CounterReducer";

export function Home() {
  const accounts = useSelector(accountState);
  const counter = useSelector(counterState);

  const dispatch = useDispatch();
  // const increment = {
  //   type: "ADD_ONE",
  // };

  // const decrement = {
  //   type: "MINES_ONE",
  // };

  return (
    <MDBContainer style={{ minHeight: "63vh" }}>
      <div className="text-center">
        <p className="h2">{counter}</p>
        <MDBBtn
          color="dark"
          onClick={() => {
            dispatch(addOne());
          }}
        >
          add
        </MDBBtn>
        <MDBBtn
          color="danger"
          className="ms-3"
          onClick={() => {
            dispatch(minesOne());
          }}
        >
          decr
        </MDBBtn>
      </div>
      <Form />
      <h3>Number of accounts : {accounts.length}</h3>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">customer Name</th>
            <th scope="col">account Number</th>
            <th scope="col">account Type</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {accounts.map((ele) => {
            return (
              <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.customerName}</td>
                <td>{ele.accountNumber}</td>
                <td>{ele.accountType}</td>
                <td>
                  <MDBBtn
                    color="danger"
                    onClick={() => {
                      dispatch(deleUser(ele.id));
                    }}
                  >
                    <MDBIcon fas icon="trash" />
                    delete
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}

export default Home;
