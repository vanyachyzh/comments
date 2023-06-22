export function getInitials(fullName: string): string {
  const names = fullName.split(' ');

  const firstName = names[0];
  const lastName = names[names.length - 1];

  const firstNameInitial = firstName.charAt(0).toUpperCase();
  const lastNameInitial = lastName.charAt(0).toUpperCase();

  return `${firstNameInitial}${lastNameInitial}`;
}

