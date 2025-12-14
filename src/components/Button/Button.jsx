function Button({ children, onClick, ...props }) {
  /* ========== Logic ========== */
  const className = `button ${props.className || ""}`.trim();

  /* ========== Return ========== */
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
