import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  //Descomentar la linea de abajo solo para ver como se veria el mensaje de error que se muestra al usuario
  //throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
