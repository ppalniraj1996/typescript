import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Table } from "./Table";
import styled from "styled-components";

type formDataType = {
  id: number;
  model: string;
  make_year: string;
  operating_system: string;
  price: number;
  screen_height: number;
  screen_width: number;
};

export const Laptop = () => {
  const [text, setText] = useState({});
  const [allData, setAllData] = useState<formDataType[]>([]);

  const handleChange = (event: any) => {
    let name = event.target.name;
    setText({ ...text, [name]: event.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/laptop", text)
      .then(getData)
      .catch((error) => console.log(error));
  };

  const getData = () => {
    axios
      .get("http://localhost:8080/laptop")
      .then((response: AxiosResponse<formDataType[]>) => {
        console.log(response.data);
        setAllData([...response.data]);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSort = (data: formDataType[]) => {
    data.sort((a, b) => {
      return a.price - b.price;
    });
    setAllData([...data]);
  };
  return (
    <div>
      <button onClick={() => handleSort(allData)}>
        Sort By Price in Ascending order
      </button>
      <FormData>
        <form action="" onSubmit={handleSubmit}>
          <br />
          <label htmlFor="model">Enter Model</label>
          <input type="text" name="model" onChange={handleChange} />
          <br />
          <label htmlFor="make_year">Make Year</label>
          <input type="number" name="make_year" onChange={handleChange} />
          <br />
          <label htmlFor="operating_system">Operatin System</label>
          <input type="text" name="operating_system" onChange={handleChange} />
          <br />
          <label htmlFor="screen_heigth">Screen Height</label>
          <input type="number" name="screen_height" onChange={handleChange} />
          <br />
          <label htmlFor="screen_width">Screen Width</label>
          <input type="number" name="screen_width" onChange={handleChange} />
          <br />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" onChange={handleChange} />
          <br />
          <input type="submit" />
        </form>
        <Table data={allData} />
      </FormData>
    </div>
  );
};

export const FormData = styled.div`
  display: flex;
  justify-content: center;
  form {
    width: 30%;
    background-color: #000;
    padding: 20px;
    color: white;
    margin: 10px 0px;
    border-radius: 5px;
    margin-right: 20px;
    input {
      width: 100%;
      padding: 5px;
      font-size: 16px;
      outline: none;
      margin: 10px 0px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
