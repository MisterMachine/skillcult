class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def new
  end

  def create
    @project = Project.new(project_params)

    @project.save
    redirect_to @project
  end

  def show
    @project = Project.find(params[:id])
  end

  private
    def project_params
      params.require(:post).permit(:title, :text)
    end
end