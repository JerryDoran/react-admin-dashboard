import styled from "styled-components";

export const AppContainer = styled.div`
  .app.dark {
    background-color: #222;
    color: rgb(156, 156, 156);

    .table {
      background-color: #222;

      .tableCell {
        color: gray;
      }
    }

    .chartGrid {
      stroke: rgba(228, 228, 228, 0.219);
    }

    .navbar {
      color: #999;
      border-color: #333;

      .search {
        display: flex;
        align-items: center;
        padding: 3px;
        border: 0.5px solid lightgray;
        border-color: gray;
      }
    }
    input {
      background: transparent;
      border-bottom: none;
      color: lightgray;
    }
  }
`;
