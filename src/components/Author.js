import React from "react";
import styled from "styled-components";

const Container = styled.div`
  float: right;
  display: flex;

  @media screen and (max-width: 768px) {
    float: none;
    margin-bottom: 16px;
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const Role = styled.div``;

const Location = styled.div``;

const Author = ({ name, role, avatar, location }) => {
  return (
    <Container>
      <Avatar src={avatar} />
      <Profile>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <Location>{location}</Location>
      </Profile>
    </Container>
  );
};

export default Author;
