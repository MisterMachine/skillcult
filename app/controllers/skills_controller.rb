class SkillsController < ApplicationController
  def index
    @skills = Skill.all
  end

  def new
  end

  def create
    @skill = Skill.new(skill_params)

    @skill.save
    redirect_to @skill
  end

  def show
    @skill = Skill.find(params[:id])
  end

  private
    def skill_params
      params.require(:post).permit(:title, :text)
    end
end
