function Button({ type = "button", children, onClick, ...props }) {
  /* ========== Logic ========== */
  const className = `button ${props.className || ""}`.trim();

  /* ========== Return ========== */
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
