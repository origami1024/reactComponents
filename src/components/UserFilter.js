import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  border: 2px solid white;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 10px;
  max-width: 300px;
`
const Taglist = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Tag = styled.span`
  padding: 2px;
  border: 1px dashed red;
  margin: 3px;
`
const FilterFooter = styled.div`

`


function UserFilter(props) {
  return (
    <FilterContainer>
      <Taglist>
        {props.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </Taglist>
      <hr/>
      <FilterFooter>
        {/* {props.testprop} */}
        радиус_пикер(состоит из 3х комп)
        город_пикер(состоит из 3х комп)
      </FilterFooter>
    </FilterContainer>
  );
}
export default UserFilter;