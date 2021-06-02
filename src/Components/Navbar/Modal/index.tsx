import { MDBIcon } from "mdbreact"
import React from "react"
import ReactDom from "react-dom"

import "./style.css"

const el = document.getElementById("searchInputModal") as HTMLDivElement

interface Props {
  handleFunction: (e: React.MouseEvent<HTMLDivElement>) => void
}

const SearchInputModal: React.FC<Props> = ({ handleFunction }) => {
  const [searchInput, setSearchInput] = React.useState<string>("")

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value)
  }

  const preventCloseOnInput = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return ReactDom.createPortal(
    <div className="search-input-modal" onClick={handleFunction}>
      <div className="close-btn" onClick={handleFunction}>
        <MDBIcon icon="times" />
      </div>
      <input
        type="text"
        name="search-input"
        placeholder="search"
        value={searchInput}
        onClick={preventCloseOnInput}
        onChange={handleSearchInput}
      />
      <button>
        <MDBIcon icon="search" />
      </button>
    </div>,
    el
  )
}

export default SearchInputModal
