import { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const FilteredSearch = () => {
  const projectsData = [
    {
      id: 1,
      name: "GitLab",
      description: "Open source development tool.",
      language: "Ruby",
      role: "Owner",
    },
    {
      id: 2,
      name: "Inkscape",
      description: "Vector image editor.",
      language: "C++",
      role: "Contributor",
    },
    {
      id: 3,
      name: "OpenRGB",
      description: "RGB lighting control.",
      language: "Python",
      role: "Maintainer",
    },
    // Add more projects
  ];

  const filterOptions = {
    languages: ["Ruby", "Python", "C++", "JavaScript"],
    roles: ["Owner", "Maintainer", "Contributor"],
  };

  // States for search input and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Handle input changes
  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleLanguageChange = (event) =>
    setSelectedLanguage(event.target.value);
  const handleRoleChange = (event) => setSelectedRole(event.target.value);

  // Filter logic
  const filteredProjects = projectsData.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLanguage === "" || project.language === selectedLanguage) &&
      (selectedRole === "" || project.role === selectedRole)
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      {/* Search Bar */}
      <TextField
        label="Search Projects"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      {/* Filters */}
      <div style={{ display: "flex", gap: "10px" }}>
        {/* Language Filter */}
        <FormControl fullWidth>
          <InputLabel>Language</InputLabel>
          <Select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            label="Language"
          >
            <MenuItem value="">All Languages</MenuItem>
            {filterOptions.languages.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Role Filter */}
        <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select value={selectedRole} onChange={handleRoleChange} label="Role">
            <MenuItem value="">All Roles</MenuItem>
            {filterOptions.roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Filtered Projects List */}
      <div style={{ marginTop: "20px" }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Language:</strong> {project.language}
              </p>
              <p>
                <strong>Role:</strong> {project.role}
              </p>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredSearch;
