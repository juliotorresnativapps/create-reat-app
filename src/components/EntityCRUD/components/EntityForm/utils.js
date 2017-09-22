export function EntityForm({ all, create, update }) {
  return (target) => {
    if(all) {
      target.required = all;
    } else {
      target.required = { create, update };
    }
  };
}
