import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, Geo_Options } from "../../Api/api";

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);
  const handelSearch = (searchValue) => {
    setSearch(searchValue);
    onSearchChange(searchValue)
  };
  const loadOptions = async (inputValue) => {
    const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, Geo_Options);
    const result = await response.json();
    console.log(result);
    return {
      options : result.data.map((city)=>{
        return {
          value : `${city.latitude} ${city.longitude}`,
          label : `${city.name} ,${city.countryCode}  `
        }
      } )
    }
  };
  return (
    <AsyncPaginate
      debounceTimeout={600}
      onChange={handelSearch}
      value={search}
      placeholder={"Search For City"}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
