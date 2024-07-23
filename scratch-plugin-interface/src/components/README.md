# This project structure uses atomic design. Therefore, there are several key directories:
- atoms: The smallest functional piece, such as a textfield or image wrapper
- molecules: combinations of atoms, something like a selection menu
- organisms: combinations of molecules, something such as a navigation bar
- templates: layouts of pages which organisms can slot into
- pages: specific instances of templates that have organisms slotted in