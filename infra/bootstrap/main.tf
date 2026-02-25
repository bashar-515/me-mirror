resource "tfe_organization" "main" {
  name = "Beesho"
  email = var.email
}

resource "tfe_project" "main" {
  name = "site"
  organization = tfe_organization.main.name
}

resource "tfe_workspace" "main" {
  name = "site"
  organization = tfe_organization.main.name
  project_id = tfe_project.main.id
}

resource "tfe_workspace_settings" "main" {
  workspace_id = tfe_workspace.main.id
  execution_mode = "local"
}
