class AlterProjects < ActiveRecord::Migration
  def change
    remove_column(:projects, :text)
    add_column(:projects, :author, :string)
    add_column(:projects, :intro, :text)
    add_column(:projects, :extended, :text)
    add_column(:projects, :published, :datetime)
  end
end