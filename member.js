function skillsMembers() {
  return {
    "name": "skillsMembers",
    "description": "A function that returns an object with a name and description.",
    "parameters": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the member."
        },
        "description": {
          "type": "string",
          "description": "A brief description of the member's skills."
        }
      },
      "required": ["name", "description"]
    }
  };
}

module.exports = skillsMembers;