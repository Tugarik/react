import { useState } from "react";

export default function PaginationBtn({ btnName, btnClass }) {
  return <button className={`page-numbers ${btnClass}`}>{btnName}</button>;
}
