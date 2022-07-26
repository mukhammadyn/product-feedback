import { NavToggleContextProvider } from "./context/nav-context";
import { Main } from "./main";
import { Sidebar } from "./sidebar";
import { SuggestionMain } from "./suggestion.style";

export const Suggestion = () => {
  return (
    <SuggestionMain>
      <NavToggleContextProvider>
        <Sidebar />
      </NavToggleContextProvider>
      <Main />
    </SuggestionMain>
  );
};
