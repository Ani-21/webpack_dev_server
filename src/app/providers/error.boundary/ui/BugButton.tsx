import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

export const BugButton = () => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  const generateError = () => setIsError(true);

  return (
    <div>
      <Button onClick={generateError}>Прокинуть ошибку</Button>
    </div>
  );
};
