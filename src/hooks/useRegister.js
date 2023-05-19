import { useState } from "react";

export const useRegister = (setIsLoading, callback) => {
   const [error, setError] = useState("");

   const fetching = async (...args) => {
      try {
         setIsLoading(true);
         await callback(...args);
         setError("");
      } catch (error) {
         console.log("Произошёл отлов в useRegister");
         error.response.data != undefined
            ? setError(error.response.data)
            : setError("Возникла непредвиденная ошибка");
      } finally {
         setIsLoading(false);
      }
   };
   return [fetching, error];
};
