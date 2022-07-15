import { Main } from "./main"
import { Sidebar } from "./sidebar"
import { SuggestionMain } from "./suggestion.style"

export const Suggestion = () => {

  return(
    <SuggestionMain>
      <Sidebar />
      <Main />
    </SuggestionMain>
  )
}
