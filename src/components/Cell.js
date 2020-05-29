import React, { memo } from "react";

import { TETROMINOS } from "../tetrominos";

import { StyledCell } from "./styles/StyledCell";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default memo(Cell);
