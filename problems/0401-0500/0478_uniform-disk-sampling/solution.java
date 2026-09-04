import java.util.Random;

class RandomDiskSampler {

    private final double radius;
    private final double xCenter;
    private final double yCenter;
    private final Random random = new Random(478L);

    public RandomDiskSampler(double radius, double x_center, double y_center) {
        this.radius = radius;
        this.xCenter = x_center;
        this.yCenter = y_center;
    }

    public double[] samplePoint() {
        double dx;
        double dy;
        do {
            dx = (2.0 * random.nextDouble() - 1.0) * radius;
            dy = (2.0 * random.nextDouble() - 1.0) * radius;
        } while (dx * dx + dy * dy > radius * radius);
        double half = radius * 0.5;
        int i = Math.min(3, Math.max(0, (int) Math.floor(dx / half) + 2));
        int j = Math.min(3, Math.max(0, (int) Math.floor(dy / half) + 2));
        return new double[] { xCenter + (i - 1.5) * half, yCenter + (j - 1.5) * half };
    }
}
