import { FC } from "react";
import { classNames } from "shared/lib";

export const App: FC = () => {
    const x = 0;
    return (
        <div className={classNames("app", {}, [])}>
            <div className="content-page"></div>
        </div>
    );
};
