import { ref } from 'vue';
import { ElButton, ElIcon } from 'element-plus';
import { Orange, ElementPlus } from '@element-plus/icons-vue';
import styled from 'vue3-styled-components';

export const Container = styled.div`
  a {
    color: #2c3e50;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
`;

export interface HelloWorldProps {
  msg: string;
}

// This is functional components in Vue render function.
// You can refer to document: https://vuejs.org/guide/extras/render-function.html#functional-components
export default (props: HelloWorldProps) => {
  const count = ref(0);

  return (
    <Container>
      <h1>{props.msg}</h1>

      <p>
        <u>O</u>rangii <u>V</u>ue E<u>x</u>ample
      </p>
      <p>
        <ElIcon><Orange /></ElIcon> and <ElIcon><ElementPlus /></ElIcon>
      </p>
      <p>
          Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
          +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      </p>

      <p>You can use <code>vuetsx</code> to generate <code>defineComponent</code> block more fastly.</p>
      <p>See <code>README.md</code> for more information.</p>

      <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
          |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
      </p>

      <ElButton type="warning" onClick={() => count.value++}>Count is {count.value}</ElButton>

      <p>Note: Hot module replacement may lose state.</p>
    </Container>
  );
};
