import styled from 'vue3-styled-components';

const Container = styled.div`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
`;

export default () => {
  return  (
    <Container>
      <router-view></router-view>
    </Container>
  );
};
