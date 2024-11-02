import { useContext, Context } from "react";

const useAppContexts = <T,>(currentContext: Context<T | undefined>) => {
  const context = useContext(currentContext);
  if (context === undefined) {
    throw new Error(
      `useAppContexts must be used within a Provider for this context.`
    );
  }

  return context;
};

export default useAppContexts;
