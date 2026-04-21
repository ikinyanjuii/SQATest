def is_valid_email(email):
    if not email:
        return False
    if " " in email:
        return False
    if "@" not in email:
        return False
    parts = email.split("@")
    if len(parts) != 2:
        return False
    domain = parts[1]
    if "." not in domain:
        return False
    return True
# Functional Test Array
if __name__ == "__main__":
    emails = [
        "testemail@example.com",
        "invalidemail",
        "testemail@com",
        "testemail @example.com",
        ""
    ]

    for e in emails:
        print(e, "=>", is_valid_email(e))