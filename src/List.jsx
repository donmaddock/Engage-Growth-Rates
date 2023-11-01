export function List({ items, onSelectUnit, type }) {
  return (
    <>
      <label for="unit">Choose a {type}: </label>
      <select
        name="unit"
        id="unit"
        onChange={(e) => {
          onSelectUnit(e.target.value);
        }}
      >
        {items.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </>
  );
}
