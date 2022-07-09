import React from "react";
import Icon from "../Icon/Icon"

import { StyledButton } from "./styles_sass";

export const ButtonFavorites =()=> {
    return (<StyledButton>
        <Icon id="favorites" />
      </StyledButton>
    )
}
export default ButtonFavorites;