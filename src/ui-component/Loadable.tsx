import {
  ComponentProps,
  ComponentType,
  LazyExoticComponent,
  Suspense,
} from "react";
import Loader from "./Loader";

// project imports

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable =
  <T extends LazyExoticComponent<ComponentType<any>>>(Component: T) =>
  (props: ComponentProps<T>) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
