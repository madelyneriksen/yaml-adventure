YAML Adventures
====

Create interactive text adventures from YAML files, share them, and play them in your browser!

YAML Adventures is a small, quick, and _fun_ project using React. Tests are run with Jest and powered by Enzyme. Bundling of the app is done by Parcel.

## Create Your Adventure

Adventures are YAML files with a specific structure:

```yaml
# your_adventure.yaml

# Games have different "locations" the player can enter.
#
# Each game needs a "start" location

start:
  # Each location needs a "text" attribute.
  # This is the message shown in the message box!
  text: |
    Hello world! Welcome to my awesome adventure game. Drama! Romance! Exploration! It's all possible.
  
  # Options are rendered as buttons that represent actions
  # The player can click each option to "move" to a new location.
  #
  # "text" is the text rendered on the button
  # "location" is the location the player is moved to (ex. start)
  options:
    - text: This is all pretty cool
      location: step_two
    - text: Can you repeat that?
      location: start

step_two:
  text: |
    That's the end of our short game!
  # If you don't want to show any options, set options to "[]"
  options: []
```

That's all there is to an adventure file! Get creating! ✨🌈

## Develop

You will need `npm` installed, and maybe some experience with React. Just clone the repository, `npm install`, and start hacking!

Tests are run with Jest and use Enzyme. You can run the tests with the following command:

```bash
npm run test
```

The development server is provided by Parcel. View your changes at localhost:8000 after running:

```bash
npm start
```

### License

MIT Licensed!
