import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const InvoiceForm = () => {
  return (
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
          <FieldError />
        </Field>
      </FieldGroup>
    </form>
  );
};

export default InvoiceForm;
