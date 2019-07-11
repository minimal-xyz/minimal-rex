import React, { FC } from "react";
import { IGlobalStore } from "./model";
import { useRexContext } from "@jimengio/rex";
import { add } from "./controller";

let Container: FC<{}> = props => {
  let count = useRexContext((store: IGlobalStore) => store.x);

  return (
    <div>
      <div>
        {count}
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
};

export default Container;
